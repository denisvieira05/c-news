// import myInterests from './myInterests.json'

class FakeInterestsApiDataSource {

    getMyInterests() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve(myInterests)
            }, 2000)
        })
    }

    saveMyInterests(myInterests) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // resolve(myInterests)
            }, 2000)
        })
    }

}

export default FakeInterestsApiDataSource