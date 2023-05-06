import React from "react";






const Timer = ({seconds, interval}) => {      
        
        const styles = {
            fontSize: "3vw"
        }        
        

        let sec = String(seconds)
    if(seconds > 0){   
        if(sec.at(-interval)){
            return(
                <span style={styles}>
                    {sec.at(-interval)}
                </span>
            )
        } else {
            return (
                <span style={styles}>
                    {0}
                </span>
            )
            
        }
    } else {
        return(
            <span style={styles}>
                    {0}
            </span>
        )
        
    }
        
        
        
            
        
        
        
        
    
}

export default Timer;