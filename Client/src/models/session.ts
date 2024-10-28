import type { User } from "@/models/users"
import { reactive } from "vue"

export const session = reactive({
    profile: 0,
    access: false as boolean
})

export function login(user: User) {
    session.profile = user.id;
    session.access = user.admin;
}
export function logout() {
    session.profile = 0;
    session.access = false;
}