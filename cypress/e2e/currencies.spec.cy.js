describe('Testing endpoints that return ticker info', () => {

  it('Testing endpoint that return list of all currencies with basic data', () => {

      const url = 'api/v2/currencies/';

      cy.request(url).then((listOfCurrencies) => {
      
        expect(listOfCurrencies.status,'expected status 200').to.equal(200);
        expect(listOfCurrencies.body).to.be.an('array').to.not.be.empty;

        for (let currencyInfo of listOfCurrencies.body) {

          if (Object.keys(currencyInfo).length == 9) {
            expect(currencyInfo).to.have.property('symbol').to.be.a('string');
          }
          expect(currencyInfo,'Checking if object has property available_supply and it is a string')
          .to.have.property('available_supply').to.be.a('string');
          expect(currencyInfo,'Checking if object has property currency and it is a string and not empty')
          .to.have.property('currency').to.be.a('string').to.not.be.empty;
          expect(currencyInfo,'Checking if object has property decimals and it is a number and it is at least 0')
          .to.have.property('decimals').to.be.a('number').to.be.at.least(0);
          expect(currencyInfo,'Checking if object has property deposit and it is a string and not empty')
          .to.have.property('deposit').to.be.a('string').to.not.be.empty;
          expect(currencyInfo,'Checking if object has property logo and it is a string and not empty')
          .to.have.property('logo').to.be.a('string').to.not.be.empty;
          expect(currencyInfo,'Checking if object has property name and it is a string and not empty')
          .to.have.property('name').to.be.a('string').to.not.be.empty;;
          expect(currencyInfo,'Checking if object has property type and it is a string and not empty')
          .to.have.property('type').to.be.a('string').to.not.be.empty;
          expect(currencyInfo,'Checking if object has property withdrawal and it is a string and not empty')
          .to.have.property('withdrawal').to.be.a('string').to.not.be.empty;
        }       
      });
  });

  it('Testing endopoint that return ticker data for all currency pairs', () => {

    const url = 'api/v2/ticker/';

          cy.request(url).then((tickerData) => {
      
        expect(tickerData.status,'expected status 200').to.equal(200);
        expect(tickerData.body).to.be.an('array').to.not.be.empty;

        for (let pair of tickerData.body) {

          // if (Object.keys(currencyInfo).length == 9) {
          //   expect(currencyInfo).to.have.property('symbol').to.be.a('string');
          // }
          expect(pair,'Checking if object has property ask and it is a string')
          .to.have.property('ask').to.be.a('string');
          expect(pair,'Checking if object has property bid and it is a string and not empty')
          .to.have.property('bid').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property high and it is a string and not empty')
          .to.have.property('high').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property last and it is a string and not empty')
          .to.have.property('last').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property low and it is a string and not empty')
          .to.have.property('low').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property open and it is a string and not empty')
          .to.have.property('open').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property open_24 and it is a string and not empty')
          .to.have.property('open_24').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property pair and it is a string and not empty')
          .to.have.property('pair').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property percent_change_24')
          .to.have.property('percent_change_24');
          expect(pair,'Checking if object has property side and it is a string and not empty')
          .to.have.property('side').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property timestamp and it is a string and not empty')
          .to.have.property('timestamp').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property volume and it is a string and not empty')
          .to.have.property('volume').to.be.a('string').to.not.be.empty;
          expect(pair,'Checking if object has property vwap and it is a string and not empty')
          .to.have.property('vwap').to.be.a('string').to.not.be.empty;
        }       
      })
  });

  it.only('Testing endopoint that return hourly ticker data for the requested currency pair', () => {

    const tradingPairs = [
      'btcusdt',
      'btceur',
      'ethusd'
    ];

    tradingPairs.forEach((tradingPair) => {
      const url = `api/v2/ticker/${tradingPair}`;

      cy.request(url).then((tradingPair) => {
        expect(tradingPair.status,'expected status 200').to.equal(200);
        expect(tradingPair.body).to.be.an('object').to.not.be.empty;

        expect(tradingPair.body,'Checking if object has property ask and it is a string')
          .to.have.property('ask').to.be.a('string');
        expect(tradingPair.body,'Checking if object has property bid and it is a string and not empty')
          .to.have.property('bid').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property high and it is a string and not empty')
          .to.have.property('high').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property last and it is a string and not empty')
          .to.have.property('last').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property low and it is a string and not empty')
          .to.have.property('low').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property open and it is a string and not empty')
          .to.have.property('open').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property open_24 and it is a string and not empty')
          .to.have.property('open_24').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property percent_change_24')
          .to.have.property('percent_change_24');
        expect(tradingPair.body,'Checking if object has property side and it is a string and not empty')
          .to.have.property('side').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property timestamp and it is a string and not empty')
          .to.have.property('timestamp').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property volume and it is a string and not empty')
          .to.have.property('volume').to.be.a('string').to.not.be.empty;
        expect(tradingPair.body,'Checking if object has property vwap and it is a string and not empty')
          .to.have.property('vwap').to.be.a('string').to.not.be.empty;  
      });
    })
  });
});