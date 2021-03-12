import $U from '@/common/free-lib/utils.js'
import $H from '@/common/free-lib/request.js'
import Chat from '@/common/free-lib/chat.js'
import $C from '@/common/free-lib/config.js'

export default {
	state:{
		user:false,
		apply:{
			rows:[],
			count:0
		},
		mailList:[],
		chat:null,
		
		//会话列表
		chatList:[],
		
		// 总未读数
		totalNoreadnum:0,
	},
	mutations:{
		updateUser(state, { k,v }){
			if(state.user){
				state.user[k] = v
				$U.setStorage('user',JSON.stringify(state.user))
			}
		}
	},
	actions:{
		// 登陆后处理
		login({ state,dispatch },user){
			// 存到状态中
			state.user = user
			// 存储到本地存储
			$U.setStorage('token',user.token)
			$U.setStorage('user',JSON.stringify(user))
			$U.setStorage('user_id',user.id)
			
			// 获取好友申请
			dispatch('getApply')
			
			//连接socket
			state.chat = new Chat({url:$C.socketUrl})
			// 获取会话列表
			dispatch('getChatList')
			// 初始化总未读数角标
			dispatch('updateBadge')
		},
		// 退出登陆
		logout({state}){
			// 清除登陆状态
			state.user = false
			$U.removeStorage('token')
			$U.removeStorage('user')
			$U.removeStorage('user_id')
			// 关闭socket连接
			state.chat.close()
			state.chat = null
			// 路由跳转
			uni.reLaunch({
				url:'/pages/common/login/login'
			})
		},
		// 初始化登陆状态
		init({state,dispatch}){
			// 拿到存储的数据
			let user = $U.getStorage('user')
			if(user){
				// 初始化登陆状态
				state.user = JSON.parse(user)
				// 连接socket
				state.chat = new Chat({url:$C.socketUrl})
				// 获取会话列表
				dispatch('getChatList')
				// 获取好友申请
				dispatch('getApply')
				// 初始化总未读数角标
				dispatch('updateBadge')
			}
		},
		// 获取好友申请列表
		getApply({state,dispatch},page = 1){
			$H.get('/apply/'+page + '?limit='+page*10).then(res => {
				state.apply = res
				// console.log(state.apply.count)
				// 更新通讯录角标提示
				dispatch('updataMailBadge')
			})
		},
		// 更新通讯录角标
		updataMailBadge({state}){
			if(state.apply.count > 0){
				let count =  state.apply.count > 99 ?  '99+' : state.apply.count.toString()
				return uni.setTabBarBadge({
					index:1,
					text:count
				})
			}
			uni.removeTabBarBadge({
				index:1
			})
		},
		// 获取通讯录列表
		getMailList({state,dispatch}) {
			$H.get('/friend/list').then(res => {
				state.mailList = res.rows.newList
			})
		},
		// 获取会话列表
		getChatList({ state }){
			state.chatList = state.chat.getChatList()
			console.log('获取会话列表',state.chatList)
			// 监听会话列表变化
			uni.$on('onUpdateChatList',(list) => {
				state.chatList = list
			})
		},
		// 初始化总未读数角标
		updateBadge({state}){
			// 开启监听总未读数变化
			uni.$on('totalNoreadnum',(num) => {
				state.totalNoreadnum = num
			})
			state.chat.updateBadge()
		},
		// 断线重连
		reconnect({ state }){
			if(state.user && state.chat){
				state.chat.reconnect()
			}
		}
	},
	
}