import HttpClient from '@/utils/httpClient'
export default class AppApi {
	static URL_PREFIX : string = '/auth/app'
	static appApi : AppApi

	static getInstance() : AppApi {
		return new AppApi()
	}

	login(data : object) : Promise<any> {
		return HttpClient({
			url: AppApi.URL_PREFIX + '/login',
			method: "POST",
			data: data,
		})
	}

}