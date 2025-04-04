import React from 'react'
import pic from '../assets/managed it/pic.jpg'

const Hardware = () => {
  return (
  <>
   <div className="bg-white text-gray-900 py-16 px-6 max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-500 text-center mb-4">
          Hardware matters.
        </h1>
        <div className="grid md:grid-cols-2 gap-8 items-center py-10">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              It’s OK to judge a computer by its cover.
            </h2>
            <p className="text-gray-600 mb-4">
              “Good enough” rarely is, and what you save up-front usually ends
              up costing more in the long-term. Your IT infrastructure is
              important, don’t settle for an off-brand solution. Future Tech
              partners with quality hardware providers to be sure that the
              equipment and solution we’re recommending isn’t just going to work
              well, it’ll also last.
            </p>
          </div>
          <div>
            <img
              src={pic}
              alt="Server hardware"
              className="w-full rounded-lg shadow-lg h-65"
            />
          </div>
        </div>
      </div>
      {/* {network section start in this line  } */}
      <div className="bg-gray-100 min-h-screen p-8 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-bold text-gray-500">
            <span className="text-gray-600 py-110 px-6 max-w-5xl mx-auto">
              Wireless that works.
            </span>
          </h1>
        </div>

        <div className="mt-6 flex flex-col md:flex-row items-center md:items-start md:space-x-8 max-w-4xl">
          <div className="flex-1 text-left py-10">
            <h2 className="text-2xl font-semibold text-gray-800">
              Smarter, Simpler Networks.
            </h2>
            <p className="mt-4 text-gray-600">
              A good, stable wireless connection can provide a lot of
              convenience and flexibility that isn’t always available when a
              wired connection is required. Future Tech is an Open Mesh partner.
              We specialize in designing and installing wireless mesh networks
              to provide stable and fast wireless coverage to any size of
              building and business.
            </p>
            <p className="mt-4 text-gray-600">
              Open Mesh technology combines multiple access points together in a
              self-healing encrypted mesh network with automatic failover.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600">
              <li>Flexible mounting for indoor and outdoor installation.</li>
              <li>Cloud-connected for remote monitoring and management.</li>
              <li>Secured and isolated Guest WiFi options, with tokens.</li>
              <li>
                Remote update scheduling for minimal disruption and maximum
                security.
              </li>
              <li>Automatic failover when one node fails.</li>
            </ul>
          </div>

          <div className="mt-6 md:mt-0">
            <img
              src={pic}
              alt="Wireless Network"
              className="w-full rounded-lg shadow-lg h-65"
            />
          </div>
        </div>
      </div>
  </>
  )
}

export default Hardware;
