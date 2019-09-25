export default class Singleton {
  //In future use redux (singleton same redux but redux adv.)
  static myInstance = null;
  public rootViewController: string = "TabbarBottom";
  public userDetails: any;
  public tokenNo: string = "";

  /**
   * @returns {Singleton}
   */
  static getInstance() {
    if ( Singleton.myInstance == null ) {
      Singleton.myInstance = new Singleton();
    }
    return this.myInstance;
  }

  //TODO: rootViewController
  getRootViewController() {
    return this.rootViewController;
  }
  setRootViewController( controller: string ) {
    this.rootViewController = controller;
  }

  //TODO: userDetails
  getUserDetails() {
    return this.userDetails;
  }

  setUserDetails( value: any ) {
    this.userDetails = value;
  }

  //TODO: tokenNo
  getTokenNo() {
    return this.tokenNo;
  }

  setTokenNo( value: any ) {
    this.tokenNo = value;
  }

}     
