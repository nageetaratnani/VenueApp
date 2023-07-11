/* eslint-disable prettier/prettier */
export type GetVenueListResponseModel = {
  results: Venue[];
};
export type Venue = {
    id:number,
    location:number,
    name:string,
    total_capacity:number,
    lat:number,
    lon:number,
    featured_image:string,
    food_policy: string,
    address:string,
    timings:string,
    is_open:number,
    is_branch_open:string,
};
