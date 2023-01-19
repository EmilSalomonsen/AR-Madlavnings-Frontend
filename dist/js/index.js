const baseurl = "https://ar-speciale.azurewebsites.net/api/User"

Vue.createApp({

    data() {
        return {
            users: [],
            parametersToGetBy: "",
            addData: { firstName: "", lastName: "", email:"", country:""},
            addMessage: "",
        }
    },


    methods:
    {
        getAllUsers() {
            this.helperGetAndShow(baseurl)
        },

        async helperGetAndShow(url) { 
            console.log(url)
            try {
                const response = await axios.get(url)
                console.log("Efter get")
                this.users = await response.data
                console.log(this.users)
            } catch (ex) {
                alert(ex.message)
            }
        },

        getByParameters(parameter) {
            const url = baseurl + "?title=" + parameter
            this.helperGetAndShow(url)
            console.log(this.users)
        },
        async addUser() {
            try {
                response = await axios.post(baseurl, this.addData)
                this.addMessage = "response " + response.status + " " + response.statusText
                this.getAllUsers()
            } catch (ex) {
                alert(ex.message)
            }
        },
    }
}).mount("#app")