export const headerLinks = [
    {
        labal:'Home',
        route:'/'
    },
    {
        labal:'Create Event',
        route:'/events/create'
    },
    {
        labal:'My Profile',
        route:'/profile'
    },
];


export const eventDefaultValues = {
    tilte:'',
    description:'',
    location:'',
    imageUrl:'',
    startDateTime:new Date(),
    endDateTime:new Date(),
    categoryId:'',
    price:'',
    isFree:false,
    url:'',
}