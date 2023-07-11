import HttpClient from '@/utils/httpClient'
export default class AppApi {
	static URL_PREFIX : string = '/auth/app'
	static getInstance() : AppApi {
		return new AppApi()
	}

	login(data : object) : void {
		HttpClient({
			url: AppApi.URL_PREFIX + '/login',
			method: "POST",
			data: data,
		})
	}

}