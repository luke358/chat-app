export default {
	state: {
		//存放全局事件
		events: [],
		//获取全局音频管理器
		RECORD: null,
		RecordTime: 0,
		RECORDTIMER: null,
		sendVoice: null
	},
	mutations: {
		//初始化音频管理器
		initRECORD(state) {
			state.RECORD = uni.getRecorderManager()
			//监听
			state.RECORD.onStart(() => {
				state.RecordTime = 0
				state.RECORDTIMER = setInterval(() => {
					state.RecordTime++
				}, 1000)
			})

			//监听录音结束
			state.RECORD.onStop((e) => {
				if (state.RECORDTIMER) {
					clearInterval(state.RECORDTIMER)
					state.RECORDTIMER = null
				}
				//发送
				if (typeof state.sendVoice === 'function') {
					state.sendVoice(e.tempFilePath)
				}
				// if(!state.unRecord){
				// 	//发送
				// 	state.send('audio',e.tempFilePath,{
				// 		time:state.RecordTime
				// 	})
				// }
			})
		},
		//注册音频发送事件
		regSendVioceEvent(state, event) {
			state.sendVoice = event
		},
		//注册全局事件
		regEvent(state, event) {
			// console.log('注册事件')
			state.events.push(event)
		},
		//执行全局事件方法
		doEvent(state, params) {
			// console.log('执行事件'+state.events.length)
			state.events.forEach(event => {
				event(params)
			})
		},
		//注销事件
		removeEvent(state, event) {
			// console.log('注销事件')
			let index = state.events.findIndex(item => {
				return item === event
			})
			if (index !== -1) {
				state.events.splice(index, 1)
			}
		}
	},
	actions: {
		//分发注册全局事件
		audioOn({
			commit
		}, event) {
			commit('regEvent', event)
		},
		//分发执行全局事件
		audioEmit({
			commit
		}, params) {
			commit('doEvent', params)
		},
		//分发注销全局事件
		audioOff({
			commit
		}, event) {
			commit('removeEvent', event)
		}
	}
}
