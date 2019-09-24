import axios from 'axios';

export const follow = async (follower, following) => {
    const res = await axios.post(`http://localhost:5000/user/${following}/follow`, {
        follower, 
    })
    if (res.status === 200) {
        return res.data
    } else {
        throw Error("Cannot follow: ", res)
    }
}

export const unfollow = async (follower, following) => {
    const res = axios.post(`http://localhost:5000/user/${following}/unfollow`, {
        follower, 
    })
    if (res.status === 200) {
        return res.data
    } else {
        throw Error("Cannot follow: ", res)
    }
}