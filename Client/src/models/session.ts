import type { User } from "@/models/users"
import { reactive } from "vue"

export const session = reactive({
    profile: 0,
    access: false as boolean,
    user: null,
})

export function login(user: User) {
    session.access = user.admin;
    if (user.id){
        session.profile = user.id;
    } else {
        logout()
    }
}
export function logout() {
    session.profile = 0;
    session.access = false;
}