import { ref } from "vue"

                    
export const users = ref([
    { first: 'Mario', last: "Mario", emails: "mario@mario.mario", handle:"mario", admin:"true" },
    { first: 'Luigi', last: "Mario", emails: "luigi@mario.mario", handle:"linguini", admin:"false" },
    { first: 'Metal Mario', last: "(the better mario)", emails: "thesuperiormario@yahoo.gov", handle:"ihatemario", admin:"false" }
  ])
  
  export const exercises = ref([
    { user: 'mario', title: "Did a light jog :)", date: "11/38/9192", distance:"7", duration:"80" },
    { user: 'metalmario', title: "Got some chips from the fridge", date: "342/35438/9192", distance:"0.3", duration:"253465346347" },
    { user: 'luigi', title: "Walked Polterpup thru the park <3", date: "12/18/9193", distance:"2", duration:"45" },
  ])