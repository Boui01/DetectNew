/*
    Detect data date last new or out true at the day limit 1 day like this 1/1/2567 and 2/1/2567 to out true or 1/1/2567 and 3/1/2567 to out false  , This count out new or old at limit_day

    Result output 
    True / Flase
    Mode value
    1 == Mode Old
    2 == Mode New
*/
function DetectNew ( Time , Mode ,limit_day ){
    const time = new Date(Time);
    const today = new Date();
    const limit_new = limit_day 

    if( Mode === 1 || Mode === 'old'){
        if( (time.getFullYear() === today.getFullYear() && (time.getMonth() === today.getMonth()) && (time.getDate() < today.getDate()-limit_new) )|| 
            (time.getFullYear() === today.getFullYear() &&  time.getMonth() !== today.getMonth()) ||       
            (time.getFullYear() !== today.getFullYear())
        )
        {
            return true;
        }
        else{
            return false;
        }
    }
    else if ( Mode === 2 || Mode === 'new'){
        if(  (time.getFullYear() === today.getFullYear()) &&
             (time.getMonth() === today.getMonth())  &&
             (time.getDate() >= today.getDate()-limit_new )
        ){
            return true;
        }
        else{
            return false;
        }
    }

}

export default DetectNew;
