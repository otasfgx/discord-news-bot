function setTrigger(functionName, hour, minute){
  const trigger = new Trigger();
  trigger.set(functionName, hour, minute);
}

class Trigger{
  constructor(){
  }

  set(functionName, hour, minute){
    var setTime = new Date();
    setTime.setDate(setTime.getDate() + 1)
    setTime.setHours(hour);
    setTime.setMinutes(minute); 
    ScriptApp.newTrigger(functionName).timeBased().at(setTime).create();  
  }
}