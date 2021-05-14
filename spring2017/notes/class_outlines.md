#What Could Be Improved From Spring 2015 Class
1. Teams learning from other teams --that didn't really happen until too late
2. More time on final project
3. Room temperature
4. Presentation style for final project --why not like COMP 20, in a big hall?
5. AWS --rabbit hole
6. There was a lot of theory / big ideas discussed in this class but very little on implementation
7. Implement caching later
8. Where were the 10000+ users?  It would have been nice to see what would happen to our app if there actually were that many users.
9. Presentation lottery --can we know ahead of time?
10. Testing / unit testing was not even discussed
11. Group size of 4 => not good; group size of 3 => optimal
12. Two or three options for project => perhaps make the problem more vague so there could be more paths (e.g., messaging, social network, etc.)
13. We did not have flexibility with framework in this class.  Why not Flask, or Rails?

#What Could Be Improved From Spring 2016 Class
* Do optimizations near the end
* Knowing some of the pieces beforehand for preparation
* More discussion on best practices
* Pick own framework
* Flexibility on project scope
* Do something applicable to Tufts
* Really ugly code......
* "I didn't care about the project" --passion (x2)
* Relate to 20
* Time to meet
* Post schedule
* Ask for preference: front end or back end
* Learning from the other teams
* Post on Piazza stack
* Have options for project
* Be more careful with presentations (a team presented two weeks in a row)
* Engineering blog
* "Check-off boxes" --extra credit
* "Didn't implement something we wanted to do"
* Talks on Rails
* Hack up demos with frameworks --choose.
* Discussion of frameworks
* Open source project (for future classes)
* Development methods, how groups works (e.g., stand-up meetings), group Git workflows
* Linux sys admin
* Make presentations more status based

#Thursday, January 19th: Course Introduction
* What this course is NOT
* So what is this class?
* What is engineering?  The point of this class...
* A history of fails
* Course expectations
* Course policies
* The semester project
* Teams

#Tuesday, January 24th: Model-View-Controller, Data Modeling
* Two really important outcomes for any good Computer Science curriculum: (1) good design and (2) separation of concerns
* Design pattern:
  * Reusable practice for designing software
  * Proven way, benefits
  * Used by many
  * Risks are known
  * Avoid reinventing the wheel

* Model-View-Controller (MVC) design pattern
* MVC-based frameworks: iOS, Android, Rails, Django, Backbone.js, AngularJS, ASP, Spring
* Let's concentrate on the the Model.  Recall the idea of NoSQL or MongoDB, and example of a NoSQL database.  Why NoSQL database?
* Why NOT a NoSQL database?  Example:

|name         |m_f|title                  |year|
|-------------|---|-----------------------|----|
|Carrie Fisher|f  |Star Wars: A New Hope  |1977|
|Carrie Fisher|f  |The Empire Strikes Back|1980|
|Carrie Fisher|f  |Return of the Jedi     |1983|
|Mark Hamill  |m  |Star Wars: A New Hope  |1977|
|Mark Hamill  |m  |The Empire Strikes Back|1980|
|Mark Hamill  |m  |Return of the Jedi     |1983|
|Harrison Ford|m  |Star Wars: A New Hope  |1977|
|Harrison Ford|m  |The Empire Strikes Back|1980|
|Harrison Ford|m  |Return of the Jedi     |1983|
|Harrison Ford|m  |Indiana Jones          |1981|

* What is a relational database, the relational model?
  * Tables => collection of related records
  * Rows => records (or tuples)
  * Columns => fields adhering to certain data types
  * Keys => bindings
  * Views => query results
  * Schema => blueprint

* Why relational databases?
  * Mature
  * Productive
  * Standards exist (e.g., the Structured Query Language)
  * Extensible
  * Complex queries can be done
  * More security options
  * Avoids data duplication
  * Easier to change data (if designed correctly)

#Tuesday, January 24th: SQL, Object-Relational Model (ORM)
* Last class: MVC, data modeling, "IMDB" example, war stories
* The big ideas of data modeling:
  * Natural language can do so much
  * Allow engineers to understand business requirements and constraints
  * Identify relationships, constraints, metadata
  * Tells a lot about the application
* I also asked each team to create a wireframe(s) for next Thursday.  Why wireframes?
  * Natural language can do so much
  * Visual display of information hierarchy, layout of important content
  * Simple
  * Provide talking points
  * http://www.usability.gov/how-to-and-tools/methods/wireframing.html
* Today: implement the data model using SQL
* Recall one of the key aspects of relational databases: standardization
* But do you really have to know SQL?

#Tuesday, January 31st: Web Frameworks, Development Environment
* #fail, engineering notebook
* Lottery for presentations on Thursday
* Last class: Schema => SQL, Rails
* Most major web frameworks use the big idea known as Object Relational Mapping (ORM)
  * Definition: technique that connects the objects of an application to tables in a relational database management system.
  * The properties and relationships of the objects in an application can be easily stored and retrieved from a database _without writing SQL statements directly_ and with less overall database access code
  * Example: Active Record in Rails (http://guides.rubyonrails.org/active_record_basics.html)
  * Different frameworks use different configurations and conventions
  * Behind-the-scene, it is all SQL...
* That Was Then...
  * The LAMP stack: Linux + Apache + MySQL (database) + PHP (language)
  * The good: still alive and viable, well-known, more control
  * The bad and the ugly: administration, language design, reinvent-the-wheel constantly, enables writing really bad and insecure code
  * Vent on why PHP sucks: http://blog.codinghorror.com/the-php-singularity/
* This is now...
  * Use a framework to streamline the development; makes developing web applications easier by making assumptions about what every developer needs to get started; write less code; don't reinvent the wheel; did I say do things quickly and efficiently?
  * Carefully choose a database system. No longer one-size-fits-all.
  * If there is something that you need, download a package (or library) for the framework using a package manager (which performs installing, upgrading, configuring, and removing packages)
  * Start up the integrated server on the web app
  * Refer to the web framework API documentation
  * You will do more configuration than coding
* A Web Framework:
  * "loosly, any HTTP server implementation upon which you could build a web application—a full-stack framework, a micro-framework, or even a web platform such as Rack, Servlet, or plain PHP."
* What all modern web frameworks should have:
  * Good documentation
  * Self-contained server
  * Package management system
  * Provides a framework for unit testing
  * Single location for database connection settings (e.g., host, username, password)
  * Database migrations and rollbacks
  * Handles URL routing
  * Single / multiple queries
  * JSON serialization
  * Too many features fundamental tasks to list...  
* The structure of a modern web application framework
  * Example: a Ruby on Rails web app; recall scaffolding from last class
* The benefits and costs of scaffolding
* The benefits and costs of web frameworks
* Benchmarks: https://www.techempower.com/benchmarks/#section=intro&hw=ph&test=query
* Isolated development environments
  * Ruby: use `rvm` and Gemsets https://rvm.io/gemsets/basics
  * Python: use `virtualenv` https://virtualenv.pypa.io/en/stable/

#Tuesday, February 7th: Web Services, Representational State Transfer (REST)
* What web applications really are: a collection of resources with CRUD operations (Create, Read, Update, Delete)
* The idea of a web service in English: "a function that can be accessed by _other programs_ (read: non-human) over the web (e.g., via HTTP)" https://stackoverflow.com/questions/226108/what-is-a-web-service-in-plain-english
* WSDL and SOAP => "heavyweight" web service protocols; XML-based
* REST => Describes resources (URLs) on which we can perform actions
* A design pattern for web applications not only resources but also standard HTTP verbs
* Recall COMP 20, servers communicate with clients using stateless connections. Also, recall some of the HTTP verbs: {POST, GET, DELETE, PUT}
* Example 1: to fetch a list of articles, which one of the HTTP commands do you use?
  - Answer: GET. So the URL /articles will issue a GET request. To fetch a particular article, /articles/3
* Example 2: to add an article, which one of the HTTP commands do you use?
  - Answer: POST. BUT, using the same path as above
* REST Principles
  - Give every "thing" (i.e., resource) an ID
  - Link things together
  - Use HTTP standard methods
  - Resources with multiple representations (e.g., XML, JSON)
  - Communicate statelessly
* So what does REST have to do with CRUD? A lot: each HTTP interaction should specify, on its own, a CRUD operation and which object to do it on
* The other importance of REST and CRUD: literature.  See GitHub API.

#Tuesday, February 28th: Static Content Optimization
* Leg 3 presentations: 3, 6, 13, 14
* So far, I'm seeing this course is going slowly
  - Engineering notebook, virtual environments, decision-making => getting the ducks-in-the-row
  - We have barely touched web engineering side of things
* Last week: a major security incident affecting Cloudflare and numerous websites: https://blog.cloudflare.com/incident-report-on-memory-leak-caused-by-cloudflare-parser-bug
  - Why is this important for this class?
  - What is Cloudflare?
  - Vocabulary in incident report...
* In leg 3, there's a requirement: "Your team is required to make the MVP "pretty."  That is, use a number of (e.g., more than 1) JavaScript files and stylesheets."
  - Understanding *why* this requirement: the topic of today
* Scenario I used to give on final exam for this class: "Congratulations, you've made it!  Your website has received much publicity.  The number of unique users per day spiked from 100 to 50000 within a week.  Unfortunately, you are also on your way to watch your server melt thanks to the new load.  Like your predecessors, you are also using WordPress.  Unlike your predecessors, you only have $3000.00 put aside in the warchest to spend on your website.  Assuming that you have full control of your server, including making modifications to configuration files, list some of the tests and improvements that you can make to improve the performance of your website so it does not go kablooey!"
* Static content: perhaps even more important than dynamic content
* The big ideas
  - Minification of content
  - Expiry
  - Caching
  - Use CDN
  - Measure
* Example workflow in JavaScript using Grunt

#Thursday, March 9th: Dynamic Content Optimization and Distributed Memory Caching Systems
* #whatcouldpossiblygowrong with web applications, what do we have to worry about?
  - when there are LOTS of database transactions? (which is common)
  - what's a faster option?
* The K + 1 problem
  - Extra queries
  - Code review
  - Examples: http://www.sitepoint.com/silver-bullet-n1-problem/, http://guides.rubyonrails.org/active_record_querying.html
  - Solution: Eager loading
* Traditional caching architectures
  - k-v hash table
  - client-server model
  - "short term memory"
  - Distributed
  - Takes advantage of available RAM
  - "Dumb" servers
  - NOT persistent
  - NOT application specific
  - NOT highly available
  - If you have taken COMP 40, what about reliability?
* Memcached
  - 250 byte key size
  - 1 MB value limit
  - LRU: least recently used accessed items are cycled out, not MRU
  - Objects are serialized
  - Client hashes key to server
  - Volatile
  - Commands
    - set, add, replace => reads
    - get, gets, delete => writes
* Redis
  - Part of the NoSQL family (like MongoDB)
  - Similar set of simple commands as memcached
  - Persistence to disk
  - Values up to 512 MB in size
* Example: my MBTA web application and API
* For Your Interest
  - Facebook has 2 orders of magnitude more reads than writes!

#Tuesday, March 28th: Scaling
* How can your web application support n users where n is really large?
* How can one divide the load of supporting a web application among multiple CPUs and disk drives?
* The "one-machine" problem
* Definition: Scaling horizontally (or scaling out): add servers
* Definition: Scaling up: adding power to an existing box
* Readings

#Thursday, April 13: Final Thoughts
##Outcomes
* Writing
* Performance and tradeoffs
* Never do something from scratch
* Coding vs engineering
* Design from an engineering perspective
* Challenges with subprojects, components
* Model-View-Controller
* Other services (Heroku, AWS) --their values but up to a point.........
* How to implement a project
* On-boarding costs (e.g., with one-click deployments)
* Knowing what your clients want
* Documentation and communicating your design choices
* Technology will change
* Technology will not change (i.e., legacy code)
* Ideas and concepts will not change
* People may not change
* The ability to dig into the frameworks
* Explain decisions, choices (e.g., when deciding a framework)

##Clear the Air, Improvements in the Future
* Do optimizations near the end
* Knowing some of the pieces beforehand for preparation
* More discussion on best practices
* Pick own framework
* Flexibility on project scope
* Do something applicable to Tufts
* Really ugly code......
* "I didn't care about the project" --passion (x2)
* Relate to 20
* Time to meet
* Post schedule
* Ask for preference: front end or back end
* Learning from the other teams
* Post on Piazza stack
* Have options for project
* Be more careful with presentations (a team presented two weeks in a row)
* Engineering blog
* "Check-off boxes" --extra credit
* "Didn't implement something we wanted to do"
* Talks on Rails
* Hack up demos with frameworks --choose.
* Discussion of frameworks
* Open source project (for future classes)
* Development methods, how groups works (e.g., stand-up meetings), group Git workflows
* Linux sys admin
* Make presentations more status based