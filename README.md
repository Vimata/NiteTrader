NiteTrader README:

NiteTrader is an application built implementing the MERN Stack Software Model.  Node.js is used as the application runtime that the stack runs on, mongoDB is used as the backend database, express router is implemented as the backend application router, and lastly NiteTrader uses react as the frontend web application framework.  API requests are dispatched as AJAX requests to the AlphaVantage stock api providing real-time and up-to-date information on any publicly traded company.  

Users are able to create stock portfolios with an initial value amount...(e.g. 50,000$).  The user will be able to buy and sell stock much similiar to actual stock market.  Furthermore, users will be able to create watch lists of stocks they have interest in.  The app will simulate how a user would have done if they had made the same trades using actual currency. The user is able to search for vast amounts of data on each individual stock utilizing a number of different api calls. 

However, the rates on which api stock information calls to AlphaVantage and the amount of database entries are both bottlenecks in the current state of the app, and as a result, the user is not able to make multiple stock information calls quickly.  Design implementations of the backend database were then based around the prior mentioned information, and as result turned out to be an interesting curveball in the build process. 

<!-- editing to set upstream -->