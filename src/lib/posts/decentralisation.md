<div class="aspect-video w-full flex flex-col items-center text-primary-500 text-4xl font-semibold">Decentralisation is the furture
    <img src="/decentralisation/different-system-arch.png" alt=""/>
</div>

Hi, Let us talk about different system architectures. How everything around is centralised and how decentralisation is changing the world. We will discuss how centralised architecture operates, what are the potential drawbacks and how decentralisation can be used to combat the challenges. We will also look at how distributes systems work and the difference between decentralised and distributed architecture. So let's dive in:

## Centralised Architecture: 
A centralised architecture is one where a single entity or a group of entities control the entirety of the system. These are the most widely adapted systems. Most of the organisations around us operate this way. This setup is simple to start with and easy to manage for the small/new businesses. Let us assume an example of an online candle store. The application, let's you customise your candles and delivers to your doorsteps. Suppose the business has just begun and the head quarter is situated in Mumbai, India where everything is managed. The product is made here, customer support sits here and the warehouse/inventory is here too. This is an example of Centralised architecture.

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/decentralisation/centralised.png" alt="" width="600px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. Everything is managed from the central head quarters </li>
    <li>2. Database, cache, webserver are all situated in one server (mostly) </li>
    <li>3. All the departments operate from the same building </li>
    <li>4. Inventory is probably part of the same building too</li>
</ol>
</div>

There are definitely advantages and disadvantages to this approach.
One of the advantages being Communication. When everyone is working from the same place it is easier to co-ordinate and faster action can be taken which can make the entire operation faster.
One of the disadvantages is SPOF (Single Point of Failure). If the headquarter faces a natural disaster like fire or flood. The entire business will be down since there are no backups. 


## Distributed Architecture:
A Distributed Architecture is where the system is divided into smaller parts and each individual part becomes a separate service. Say, our Candle business grows larger and we move the database, cache, etc out of our server component. Similarly, We install more warehouses across the states to manage our inventory and facilitate faster deliveries. We can also distribute the head quarter load to a geographically distant location to avoid SPOF. The distributed architecture can also look like several teams taking care of individual needs of the business, like a sales team, a marketing team, a customer support team, etc. 

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/decentralisation/distributed.png" alt="" width="600px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. Multiple headquarters to avoid SPOF </li>
    <li>2. Responsibilities shared among dedicated departments for more systematic operations </li>
    <li>3. Multiple inventories across the states for faster deliveries. In case one of the inventories go down, the deliveries can be managed from other avaailable inventories </li>
    <li>4. Since all the components are isolated, there are lesser chances of complete failure. e.g if marketing department is down, it doesn't affect the sales or other departments </li>
</ol>
</div>

A point to note here is, our business is still centralised, even though there are distributed factors to it, everyone still reports to the head quarters which are still owned by a single or group of entities. Distributed system architecture reduces the SPOF issue by a long shot. If one of the warehouses is down, another one can fill in and deliver. If one of the head quarter is down the other one can fill in and this way there will never be a total shut down to the business.


## Decentralised Architecture:
  A Decentralised system architecture is one where no single entity/node owns the whole network. Instead the decisions are made collectively by all the members through a consensus process. In addition to being distributed, a decentralised system has a lot more to offer like making the network resilient to failure. Considering above example, our business which is highly distributed and robust is faced with a different degree of damage like a malicious actor getting hold of our headquarters and thus compromising user's trust in the company or the company goes bankrupt/shuts down. Although the system architecture is distributed, it can still become a pain when the ownership is centralised. With Decentralised system architecture, this can be solved by distributing the ownership among the entities so even when one of the node/entity is compromised, other nodes can fill in of it's behalf. Another thing to note here is:

>While all decentralised networks are also distributed networks, this doesn’t hold true when reversed; not all distributed networks are decentralised networks. 

<div class="not-prose flex flex-col lg:flex-row justify-start items-center gap-10">
<img src="/decentralisation/decentralised.png" alt="" width="600px"/>
<ol class="flex flex-col max-w-[600px] gap-2 text-lg"> 
    <li>1. Multiple isolated businesses (sole proprietor) with distributed ownership. i.e no one business owns the entire system </li>
    <li>2. Each system operates autonomously and yet in sync with rest of the systems </li>
    <li>3. Even if one of the systems go down, there are many other systems to serve the customers </li>
    <li>4. The system architecture is more resilient, robust and reliable.</li>
</ol>
</div>

A great example of decentralised architecture can be applied to our candle making business. Suppose we collaborate with 100 such businesses (businesses with similar vision as ours) across the globe with each business working as a sole proprietor. This will remove the possibility of SPOF making the system more reliable and robust. Even if our node goes down, there will be 100 other nodes to serve the customers. This will build a community of similar businesses bring strength among each other and making it easier to grown in a synergistic manner. Let us see what would our business look like in a decentralised setting:


