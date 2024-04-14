export interface Rating{
    Rating_Val: number,
    Rating_Source: string
}

export interface RatingItemProps{
    Rating : Rating,
    onSelectRating: (ratingVal: number) => void;
    selectedRating: number | null
}

export const ratingData : Rating[] = [
    {Rating_Val : 1, Rating_Source : '/Ratings/One_Star.png' },
    {Rating_Val: 2, Rating_Source: '/Ratings/Two_Star.png'},
    {Rating_Val: 3, Rating_Source: '/Ratings/Three_Star.png'},
    {Rating_Val: 4, Rating_Source: '/Ratings/Four_Star.png'},
    {Rating_Val: 5, Rating_Source: '/Ratings/Five_Star.png'},
]

export interface Ratings{
    Ratings : Rating[]
}



