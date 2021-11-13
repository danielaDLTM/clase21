function isTouching(objetc1,objetc2){
    if(objetc1.x - objetc2.x < objetc2.width/2 +objetc1.width/2 &&
      objetc2.x-objetc1.x <objetc2.width/2 + objetc1.width/2 &&
      objetc1.y - objetc2.y < objetc2.height/2 + objetc1.height/2 && 
     objetc2.y-objetc1.y <objetc2.height/2 + objetc1.height/2 
       ){
       return true;
     }
     else{
      return false;
     }
    }