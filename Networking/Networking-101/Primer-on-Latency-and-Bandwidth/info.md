
## Latency
- The time from the source sending a packet to the destination recieving it 

## Bandwidth 
- Maximum throughput of the logical or phusical communication path 

![Latency and Bandwidth]('./images/BL.png')


> Latency is expensive - literally and figuratively

## The many components of Latency 

- Latency is the time it takes for a message, or a packet, to travel fromits point of origin to the point of destination. This is a simple and useful definition, but it often hides a lot of useful informattion - every system contains multiple sources or components,  contributing  to the overall time it takes for a message to be delivered, and it is important to understand what these components are and that dictates their performance.

- Propagation delay
    - amount of time required for a message to travel from the sender to reciever, which is a function to distance over speed with which the signal propagates 

- Transmission delay 
    - amount of time required for a message to travel from the sender to reciever, which is a function of the package's length and data rate of the link
- Processing delay
    - amount of time required to process the packet header, check for bit level errors, and determine the packet's destination.

- Queuing delay
    - amount of time the packet waiting in the queue until it can be processed.

-  The total latency between the client and the server is the sum of all the delays just listed. 
- Propagation time is dictated by the distance and the medium through which the signal travels — as we will see, the propagation speed is usually within a small constant factor of the speed of light. On the other hand, 
- transmission delay is dictated by the available data rate of the transmitting link and has nothing to do with the distance between the client and the server. As an example, let’s assume we want to transmit a 10 Mb file over two links: 1 Mbps and 100 Mbps. It will take 10 seconds to put the entire file "on the wire" over the 1 Mbps link and only 0.1 seconds over the 100 Mbps link.

> ![TIP]
> Network data rates are typically measured in bits per second (bps), whereas data rates for non-network equipment are typically shwn in bytes per second(Bps). this is a common source of confusion, pay close attention to the units.
> For example, to put a 10 megabyte (Mb) file "on the wire" over 1Mbps link, we will need 80 seconds. 10MB is equla to 80Mb because there are 8 bits for every byte.



- Next, once the packet arrives at the router, the router must examine the packet header to determine the outgoing route and may run other checks on the data — this takes time as well. Much of this logic is now often done in hardware, so the delays are very small, but they do exist. And, finally, if the packets are arriving at a faster rate than the router is capable of processing, then the packets are queued inside an incoming buffer. The time data spends queued inside the buffer is, not surprisingly, known as queuing delay.



- Each packet traveling over the network will  incur many instances of each of these delays. the farther the distance between the source and destination, the more it will take to propogate. The more intermedate routers we encounter along the way, the higher the processing and transmisson delays for each packet. Finallyt the higher the load of traffic along the path , the higher the likelikood of our packet being delaayed inside an incoming buffer.








