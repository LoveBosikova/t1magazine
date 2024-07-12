import Rating from "./rating";

export default {
    title: 'RatingStars',
    component: Rating
}

export const RatingOne = () => <Rating num={1}></Rating>
export const RatingTwo = () => <Rating num={2}></Rating>
export const RatingThree = () => <Rating num={3}></Rating>
export const RatingFour = () => <Rating num={4}></Rating>
export const RatingFive = () => <Rating num={5}></Rating>