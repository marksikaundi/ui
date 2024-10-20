import { Shield, Clock, Award, Server, UserMinus, Wifi } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function Component() {
  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Features Section */}
        <section className="py-16">
          <h2 className="text-4xl font-bold mb-12">
            Reach humans,
            <br />
            not spam folders
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Feature
              icon={<Shield className="w-8 h-8" />}
              title="Proactive blocklist tracking"
              description="Be the first to know if your domain is added to a DNSBL such as those offered by Spamhaus with removal requests generated by Resend."
            />
            <Feature
              icon={<Clock className="w-8 h-8" />}
              title="Faster Time to Inbox"
              description="Send emails from the region closest to your users. Reduce delivery latency with North American, South American, and European regions."
            />
            <Feature
              icon={<Award className="w-8 h-8" />}
              title="Build confidence with BIMI"
              description="Showcase your logo and company branding with BIMI. Receive guidance to obtain a VMC - the email equivalent of a checkmark on social media."
            />
            <Feature
              icon={<Server className="w-8 h-8" />}
              title="Managed Dedicated IPs"
              description="Get a fully managed dedicated IP that automatically warms up and autoscales based on your sending volume, no waiting period."
            />
            <Feature
              icon={<UserMinus className="w-8 h-8" />}
              title="Dynamic suppression list"
              description="Prevent repeated sending to recipients who no longer want your email and comply with standards like the CAN-SPAM Act and others."
            />
            <Feature
              icon={<Wifi className="w-8 h-8" />}
              title="IP and domain monitoring"
              description="Monitor your DNS configuration for any errors or regressions. Be notified of any changes that could hinder your deliverability."
            />
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-16 text-center">
          <h2 className="text-5xl font-bold mb-4">Email reimagined.</h2>
          <p className="text-5xl font-bold mb-8">Available today.</p>
          <div className="flex justify-center space-x-4 mb-16">
            <Button
              variant="default"
              size="lg"
              className="rounded-full bg-white hover:bg-white text-black"
            >
              Get Started
            </Button>
            <Button
              size="lg"
              className="rounded-full hover:rounded-full text-white bg-black hover:bg-[#1F2225]"
            >
              Contact Us
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent" />
            <Image
              src="/lupleg.svg"
              height="200"
              width="600"
              alt="Lupleg"
              className="mx-auto"
              style={{
                filter: "drop-shadow(0 0 20px rgba(255,255,255,0.2))",
              }}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

function Feature({ icon, title, description }: FeatureProps) {
  return (
    <div className="flex flex-col">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  );
}
