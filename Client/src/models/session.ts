import type { User } from "@/models/users"
import { reactive } from "vue"
import { useRouter } from "vue-router"

export const session = reactive({
    profile: "" as string
})

export function login(user: User) {
    session.profile = user.handle;
}
