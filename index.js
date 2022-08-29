function scuberGreetingForFeet(num){
  if(num <= 400){
    return 'This one is on me!';
  } else if(num >= 400 && num <= 2000){
    return 'That will be twenty bucks.';
  } else if(num > 2000 && num <= 2500){
    return 'I will gladly take your thirty bucks.';
  } else {
    return 'No can do.';
  }
}

scuberGreetingForFeet(199);

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

ternaryCheckCity('NYC');

function switchOnCharmFromTip(tips){
  switch(tips){
    case 'generous' :
      return 'Thank you so much.';
      break;
    case 'not as generous' :
      return 'Thank you.';
      break;
    default :
      return 'Bye.';
      break;
  }
}

switchOnCharmFromTip('generous');