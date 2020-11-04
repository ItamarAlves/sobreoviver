class DashboardController {

    async index(request, response) {

        return response.json({"api": true});
    }
    async store(request, response) {
       
    }
}

export default new DashboardController();