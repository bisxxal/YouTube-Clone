 
export const API_KEY = 'AIzaSyAr0eTgJgxw6K5E_i0SHrYwAEQgGWh6d1s';

export const valueConverter = (value)=>{
    if(value >= 1000000){return Math.floor(value/1000000)+"M"}
    
    if(value >= 1000){return Math.floor(value/1000)+"K"}
    else{return value}

}

export const API_KEY2 = 'AIzaSyB5_zmRLVNiiaMAatr5PeI47IbGF24IShI'


// for  serch video
// https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAr0eTgJgxw6K5E_i0SHrYwAEQgGWh6d1s&type=video&q=fukrainsan