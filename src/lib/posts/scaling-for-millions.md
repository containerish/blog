<div class="aspect-video w-full flex flex-col items-center text-primary-500 text-4xl font-semibold">
    Scaling for millions of users
    <img src="/scaling/scaling.png" alt=""/>
</div>

Designing infrastructure and scaling it for many many users is difficult and let's face it, some of us (including me) don't even know how it works under the hood. So I went reading and wanted to write a blog that explains it in a fun way. I also wanted to make sure it covered the Web 3 infrastructure as well.
And here it is, this TLBRA (Too Long But Read Anyway) blog inspired by Alex Xu's system design interview explaing how scaling works on a high level.


## Single server Architechture

Let's look at what a single server setup looks like. This is the simplest and easiest to manage architecture. Where everything we need (WebApp, Database and maybe cache) is fulfilled by one server. This setup is good to start with when our product/project is still new and we are only beginning to get users.
For the course of this blog, our project is an online candle shop that lets user design their own candles (shapes, sizes, scents) which are then moulded and delivered to them.

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/single-server.png" alt="" width="600px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. User searches for our website </li>
    <li>2. DNS resolves the name (domain) to its corresponding IP address which user will use to make request to the server </li>
    <li>3. User makes request to the server </li>
    <li>4. Server component comprised of WebApp, Database and maybe a Cache component follows up quickly with a response</li>
</ol>
</div>

## Single Server with a Database

The above architechture held fine initially. However, our website has started attracting more people and the users are growing consistently, it will increase the load on our little server and we might not be able to serve all the traffic/users efficiently. To counter this, we could intoduce a separate database to store user information. What this will accomplish is, the load on the server will decrease since it no longer stores the data and can concentrate on serving users faster. The server will simply query the database to fetch users data and serve it back. Another advantage of this approach is if in case our main server goes down. The database will still have the user's data safe for when the user visits again.

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/single-server-with-db.png" alt="" width="600px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. User searches for our website </li>
    <li>2. DNS resolves the name (domain) to its corresponding IP address which user will use to make request to the server </li>
    <li>3. User makes request to the server </li>
    <li>4. Server queries the database to get user specific information</li>
    <li>5. Database returns the user specific data</li>
    <li>6. Server serves it back to the user</li>
</ol>
</div>

Now you'd think what if the database goes down too? then we're doomed! just kidding! well not really but we have a solution for that which we'll discuss in a minute.


## Multi Server Architecture

Let us assume that our Project is receiving a lot of love and the user-base continues to grow consistently. Say we were recieving 1000 requests/day earlier which has grown to 100,000/day. Amazing right! but one little server is just not enough to keep up with the requests. The responses are slower and sometimes the server might just die from too much load. We don't want that to happen so we must ***Scale***
There are multiple ways of scaling an Application

***1. Vertical Scaling*** also referred to as Scale-up
***2. Horizontal Scaling*** also known as Scale-out

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/scale-up-scale-out.png" alt=""/>
</div>

### Vertical Scaling or Scaling up

As the name suggests, scaling up means adding more juice (cpu, memory, networking, storage, etc) to the current server each time the number of users grow a certain number. This method sounds simple but is often not preferred in production. You see, it still is one server. If it goes down we go down!!!
The servers are expensive, there is a limit to how much you can add to a server and lastly they are difficult to scale down. This kind of scaling makes you want to treat the server like a pet, remember Gilfoyle's Anton from sillicon valley?
Suppose our website attracts a lot more users during holiday season and not as much rest of the year. With Scaled-up architecture, we will be fine during the high traffic season but what happens to the extra server resources rest of the times? We will still be paying for the entire thing. This also introduces 'Single Point Of Failure (SPOF)' another concept we should talk about.

  **SPOF** or Single Point Of Failure is a component in an architechture that has a capability of f'ing up the entire system. It says - 
``
If I go down, Imma take everyone with me. 😎
``

Scaling up can still be a solution to some senarios or some businesses. It really depends on the nature of application and how important it is for the business to be running 24x7 (online).
e.g for a Construction firm, it might not be as important to stay online all the time since most of their work is offline and a little downtime once in a while might not affect the production.

 ### Horizontal Scaling or Scaling out

Now, all the disadvantages of Scaling-up are rectified by Scaling-out. Scaling out simply refers to adding more servers at need. With increased traffic during holiday season, we will simply add more servers to our web-tier. If one of the servers go down the traffic will be directed to the next available server and in mean time we will spin-up a new server to replace the dead one thus avoiding SPOF. Similarly, when the traffic goes back to normal, we will remove the extra servers (scale down). We only pay for servers for the time we use them. How efficient and clean right? When working with high load and serving thousands of people, worrying about your pet server should be the last thing on your mind. Don't take it personally, but we need cattle here.


## Load Balancer

A Load Balancer as it's name suggest is resposible for evenly distributing and managing the load across multiple servers. This helps keeping servers up and healthy since no one server receives extra load and dies off in action. Load Balancer sits between user and servers and often communicates with servers in a private subnet (sub-network, part of a larger network) which means the servers cannot be reached over the internet by nasty users. The Load Balancer sits in the public part of network which is accessible over internet. Now, in some advance cases the Load Balancer can also be protected behind a Firewall 🔥 to burn off the malicious users at root, but let's discuss it some other time.
In a nutshell, Load Balancer = Good stuff, must invest in one.

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/multi-server-with-db.png" alt="" width="800px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. User searches for our website </li>
    <li>2. DNS resolves the name (domain) to its corresponding IP address which resolves to the Load Balancer </li>
    <li>3. User makes request to the Load Balancer</li>
    <li>4. Load Balancer decides which server to route the request to</li>
    <li>5. Server queries the database and recieves the response </li>
    <li>6. Server sends the data back to Load Balancer</li>
    <li>7. Load Balancer serves it back to user</li>
</ol>
</div>

## Database Replication

Winter is coming. so are Holidays!! Our user-base is expanding like a balloon but we are ready with our scaled-out web-tier. The users will be served!
One little thing to consider though. With all these users, our database has grown gaigantic too! At this point, if our one and only database goes down we will be in bit of a pickle. Also querying database for each and every request is expensive and can make the whole interaction super slow. To rectify this problem, we can replicate our database. Database replication is making one or more copies of the database which are constantly communicating with each other to keep up to date. This solves the problem of ***SPOF*** wherein if one of the database replicas is down, there are others to replace and serve on it's behalf.  For the expensive part, one of the database replicas is master replica which only hadles the write/update/delete operations while the other replicas (not master) are responsible for reading operations since read operations are more often. e.g. a write operation could be when a user wants to change their address while a read operation is user's information to be retrieved everytime they login/visit.

*If you are wondering what happens when the Master replica goes down? Well one of the Not Master replicas will be elected as a new Master. Explaining it in detail will make this blog longer and I want to keep it short, so next time?*

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/multi-server-with-db-replication.png" alt="" width="800px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. User searches for our website </li>
     <li>2. DNS resolves the name (domain) to its corresponding IP address which resolves to the Load Balancer </li>
    <li>3. User makes request to the Load Balancer</li>
    <li>4. Load Balancer decides which server to route the request to</li>
    <li>5. Server queries the read/write replica depending upon the nature of transaction </li>
    <li>6. Database returns the data to server, server sends it LB</li>
    <li>7. Load Balancer serves it back to user</li>
</ol>
</div>


## Cache and CDN

***Cache*** is a separate, relatively smaller storage system that stores frequently used data which helps in serving it blazing fast. When user reaches the server asking for his data, the server first goes on to check the cache and serves it right up if it's available. If it is not available in cache, it queries the database and serves it while also storing the data in cache for consequtive requests.
Database queries can be costly and can become quite slow with growing data. Caching helps keeping this load lighter on database while maintaining the service.

***Content Delivery Networks*** or CDNs are little servers spread across the world to store static content. Static content is photos, videos, front-page of the website and everything that doesn't change with every request. When our business grows globally, we could host CDNs across the areas we get most of our users from. So when they visit our website, the front-page will be loaded straight up from their nearest CDN while our servers (which are geographically far away) can load up rest of the dynamic content for them. 

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/multi-server-db-cache.png" alt="" width="800px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
     <li>1. User searches for our website </li>
    <li>2. DNS resolves the name (domain) to its corresponding IP address which resolves to the Load Balancer </li>
    <li>3. The nearest CDN serves the static content</li>
    <li>4. User makes request to the Load Balancer for dynamic contents</li>
    <li>5. Load Balancer decides which server to route the request to</li>
    <li>6. Server checks the cache for data, if the data is present in cache, it returns right from there.  </li>
    <li>7. If the data is not present in cache, server queries the Database to get the data</li>
    <li>8. Server sends the data back through Load Balancer while also storing it in cache for next time</li>
</ol>
</div>

## Introducing Blockchian

Phew!! that was tiresome.
There is just so much you have to worry about when running an online platform. As it grows, the architecture becomes more and more complex. What if the server goes down? What if database is compromised? Now I'm not saying that these problems are so big that only solution is to introduce a blockchain. We can always hire someone to take care of our infrastructure and it can always be managed. As to all problems there's a solution, I just want to discuss one of them being Blockchain. How simple an architecture can become with a distrubuted ecosystem involved. Afterall that was the goal of it all along wasn't it?
Let's see what our architecture could look like with a Blockchain

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/scaling/simple-with-blockchain.png" alt="" width="1000px"/>
</div>

The future is not going to be as centralised as it is today. We are surrounded by distrubuted technology and business models which are improving everyday and a lot of it involves blockchains.
A blockchain is like a giant database made up of nodes which belong to people like you and me. With a blockchain, we can completely eliminate SPOF on every level of our architecture. We will talk more about this in next blog which will an extension of this blog.
Truely thanks for reading this giagantic blog, see you next time ✌🏼
