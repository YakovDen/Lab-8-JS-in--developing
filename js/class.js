/** 
*
*/
function Account(number,typeAccount,pin,balance,
    dateCreation,user,userType,historyRevision) {
    this.number = number;
    this.typeAccount = typeAccount;
    this.pin = pin;
    this.balance = balance;
    this.dateCreation = dateCreation;
    this.user = user;
    this.userType = userType;
    this.historyRevision = historyRevision;



    this.getNumber = function(){
        return this.number;
    }
    this.setNumber = function(number) {
            this.number = number;
    }

    this.getTypeAccount = function(){
        return this.typeAccount;
    }
    this.setTypeAccount = function(typeAccount) {
            this.typeAccount = typeAccount;
    }

    this.getPin = function(){
        return this.pin;
    }
    this.setPin = function(pin) {
            this.pin = pin;
    }

    this.getBalance = function(){
        return this.balance;
    }
    this.setBalance = function(balance) {
            this.balance = balance;
    }

    this.getDateCreation = function(){
        return this.dateCreation;
    }
    this.setDateCreation = function(dateCreation) {
            this.dateCreation = dateCreation;
    }

    this.getUser = function(){
        return this.user;
    }
    this.setUser = function(user) {
            this.user = user;
    }

    this.getTypeUser = function(){
        return this.typeUser;
    }
    this.setTypeUser = function(balance) {
            this.typeUser = typeUser;
    }

    this.getHistoryRevision = function(){
        return this.historyRevision;
    }
    this.setHistoryRevision = function(historyRevision) {
            this.historyRevision = historyRevision;
    }

    
    this.greeting = function() {
      console.log('This account is ' + this.number + ', typeAccount= '+ typeAccount +', pin='+this.pin+
      ', balance='+this.balance+', dateCreation='+this.dateCreation+', user='+this.user+
      ', userType='+this.userType+', historyRevision='+this.historyRevision+ '.');
    };
  }


  function CheckingAccount(costService, userSystemType) {
    Account.call(this);
    this.costService = costService;
    this.userSystemType = userSystemType;

    this.getCostService = function(){
        return this.costService;
    }
    this.setCostService = function(costService) {
            this.costService = costService;
    }
}

var a= new SavingAccount('a',"b",[1,2,3,4,5])
function SavingAccount(time, percent, period) {

    Account.call(this);
    this.time = time;
    this.percent = percent;
    this.period = period;

    this.getTime = function(){
        return this.time;
    }
    this.setTime = function(time) {
            this.time = time;
    }

    this.getPercent = function(){
        return this.percent;
    }
    this.setPercent = function(percent) {
            this.percent = percent;
    }

    this.getPeriod = function(){
        return this.period;
    }
    this.setPeriod = function(period) {
            this.period = period;
    }
}

var savingAccount = new SavingAccount(5, 2, 100);
savingAccount.user = 'Peter';
console.log(savingAccount.user, savingAccount.time, savingAccount.percent);




  var account = new Account('5454','[ВВВВВ,депозит]','100 000 $','15.08.2018','7777','Ivan','активный','положено');
  account['number','typeAccount','user'];
  /* account['typeAccount'];
  account['user']; */
  account.greeting();

  