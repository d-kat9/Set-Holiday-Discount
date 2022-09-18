const discount = {
    _percentage: 0,
    _holiday: "",

    set percentage(percentageToCheck) {
      if (typeof percentageToCheck === "number") {
        return (this._percentage = percentageToCheck);
      }
    },
    set holiday(holidayToCheck) {
      if (typeof holidayToCheck === "string") {
        return (this._holiday = holidayToCheck);
      }
    },
    
    get todaysDiscount() {
      if (this._holiday && this._percentage) {
      return `Congratulations! You get a ${this._percentage}% discount for ${this._holiday}!`
      } else {
        return 'Holiday or discount was not set correctly!';
      }
    }
  };
  
  discount.percentage = 18;
  discount.holiday = "Veteran's Day";
  
  
  console.log(discount.todaysDiscount);
