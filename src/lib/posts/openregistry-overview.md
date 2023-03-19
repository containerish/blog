<div class="w-full flex justify-center text-primary-500 text-5xl font-semibold">OpenRegistry Overview</div>

   
![openregistry-overview](/overview-blog.png)

I would love to share our story and how OpenRegistry became a full fledged product that it is today.
My partner (who had been in Web3 eco system for a few years) started OpenRegistry as a fun project when he heard Greg Osuri(CEO at Akash Network) on a youtube interview. They talked about how amazing would it be to have a container registry on Akash.  
This sparked a light in him and he started putting a few hours everyday in building what is now OpenRegistry. After a short while, there came a Hackathon on Akash which motivated him even more to accelerate the work and present it for the Hackathon. We joined forces and started working on it together and submitted our first working prototype in Hackathon and we WON! yayy!! 

As we moved along, we came across many use cases and projects where OpenRegistry could make a difference and so we continued to work on OpenRegistry because at this point it was more than just rewards or a Hackathon to win.
Now let's talk about the technical bits of OpenRegistry, What technologies we use and why...

## Backend:
The OpenRegistry backend is written in Go with echo framework which is the most abstract and user-friendly framework. 
We needed a quick to build working prototype and only for those reasons we decided to go with echo. However, we’ll be working on replacing it entirely with a better or no framework for performance and more efficiency.  

## WebApp:
The WebApp was previously written with React and JavaScript and is now being replaced with SvelteKit and TypeScript which will definitely make it more efficient and fast. We are also using a large amount of Tailwind CSS components which are lightweight and super simple to use.
The new WebApp design is full of color and fun diagrams. We have also improved our documentation with step-by-step guides and cute [zines](https://docs.openregistry.dev) to learn about containers in a fun way.

## Database
The Database layer was previously written with Badger which is simple to use key value store and fast like a cache. However for scaling and data organization, we have migrated to PostgreSQL database. We are planning to keep using badger for operations that are very frequent. Alongside this, we have tried to make an effort for future DB migrations to be simple, quick and with zero code changes. This can be achieved by abstracting the database operations in OpenRegistry to an interface. Any new database like MongoDB could be implemented and used by just satisfying the storage interface with ease and no changes in existing code.

## Hosting and Storage

OpenRegistry uses Akash Network as it’s compute layer and IPFS as Storage layer. OpenRegistry database only stores the skylinks to the actual container images thus ensuring complete privacy.
![push layer](/blog-push-layer.png)

<div class="w-full flex text-start text-primary-500 text-xl">lets see what happens under the hood when a layer is pushed to OpenRegistry</div>

 1. From Docker CLI, user tries to push an image to OpenRegistry
 2. A container image is comprised of one or more layers(s) depending on various factors as per [OCI specification](https://github.com/opencontainers/distribution-spec/blob/main/spec.md#push)
 3. The layers are further chunked into blobs for efficiency and then uploaded one after another to the user defined storage backend
 4. Please note, unlike blobs the layers are uploaded concurrently which means at any time, there can be multiple layers being uploaded to OpenRegistry without waiting for one another
 5. The binary blob component sends the contents of the blob to the resolver one at a time while hashing the contents and storing them in db to be resolved later
 6. The resolver uploads the blob to skynet/storj and brings back the content hash which is mapped to a conatiner image or a container image tag in a human readable form or SHA256 format
 7. With the first blob received and processed, OpenRegistry notifies Docker and asks to send the consecutive blob to process
 8. Once all the blobs for a layer have been received, OpenRegistry combines them to calculate the digest of the layer and is stored along with the content hash supplied by storage backend
 9. When a user requests to retrive the image manifest from OpenRegistry at a later point, they are given the Content hash along with the layer digest which they can use to download the layer directly from the storage backend


## What’s Next for OpenRegistry?

There are great many thing we would want to introduce in and around OpenRegistry to build a complete ecosystem for public goods. We want to be more involved in community projects aside from our daily jobs and provide high quality service content as our contribution to community. Our goal is to make OpenRegistry Free for everyone which can be achieved with higher adoption by community projects and open source developers.

## WebAuthN
WebAuthN is relatively a newer standard for Authenticating users in your applications. It's a WWW standard and is 
supported in all latest versions of popular browsers. It is as simple as logging into your computer with Windows Hello or 
Apple’s Touch ID. It works much like Public-Private Key Authentication. It also encourage privacy of user data, since with 
WebAuthN we don't need to store Username, Email, Password, etc to identify a user. They simply process a cryptographic signature,
and on success they prove to be the owners of a particular account/identity.
To read more about [Web AuthN](https://webauthn.guide)

## Encrypted & Private Container Images
Private container images are one of the most sought after features of a Container Registry. OpenRegistry does provide consistent hashing system for validating the contents of a container image but with encryption, this can be taken forward to the next level. One of the major advantages of encrypted container images is that you can control the accessibility to be limited to a particular group or organization. This means you can ship confidential code, or patented work within container images without having to think about it being stolen or misused. Even if such a container image comes in hand of malicious user, they will not be able to read or decrypt the contents of the container image.
OpenRegistry will support popular cryptographic methods like Rivest-Shamir-Adleman (RSA), Elliptic Curve, and Advanced Encryption Standard (AES) and the encryption keys (private keys) will never leave the user (at least they won’t be shared with OpenRegistry). There are tools available in the market to encrypt container images on client-side and upload them to container registries.

## Platform Agnostic Security Tokens

Platform Agnostic Security Tokens or PASETO are a safe alternative to JSON Web Tokens (JWTs). JWT's were never mean to be used as long-term credentials. Using JWTs as short-lived (5-10 mins) credentials is ideal but with a Container Registry, it makes sense to have long lived credentials. They're very limited in scope and are used under secure contexts. Learn more about [PASETO](https://github.com/paseto-standard/paseto-spec)


## Org Mode

Org mode will enable you to create and manage oragnizations within OpenRegistry. You can think of Org Mode as Github Organizations.
This will let you manage a team or teams easily through org wide scopes, permissions and ACLs. Initially, Org Mode will include the following features:
- Create & manage organizations 
- User Management within the Org
- Fine grained scopes and permissions

And many more features like **P2P Container Image Distribution**, **Desktop Application** to manage & work with containers locally and **Container Runtime** with Memeory Safety and tons of security improvements than the ones available today.

But *hey!*, let's talk about them in our next one?

