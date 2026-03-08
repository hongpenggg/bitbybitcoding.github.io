import { ExternalLink } from 'lucide-react';

const mainPartner = {
  name: 'BAGUS Together',
  description: 'BAGUS Together is a vibrant network of ground-up initiatives empowering communities across Singapore. As our key partner, they provide essential support and resources to help us reach more young learners.',
  logo: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/bagus_together.png',
  website: 'https://www.bagustogether.sg/about',
  color: 'from-bit-lavender to-bit-red',
};

const supportingPartners = [
  {
    name: 'NVPC',
    description: 'National Volunteer & Philanthropy Centre champions strategic giving and volunteerism in Singapore, supporting our mission through the BAGUS network.',
    logo: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/nvpc.png',
    website: 'https://nvpc.org.sg',
    color: 'from-bit-turquoise to-bit-green',
  },
  {
    name: 'Temasek Foundation',
    description: 'Temasek Foundation supports sustainable and resilient communities. Their backing through BAGUS enables us to scale our impact.',
    logo: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/temasek_foundation.webp',
    website: 'https://www.temasekfoundation.org.sg',
    color: 'from-bit-red to-bit-lavender',
  },
  {
    name: 'Tote Board',
    description: 'As Singapore\'s primary funding agency for social causes, Tote Board provides crucial support for our educational programmes.',
    logo: 'https://raw.githubusercontent.com/bitbybitcoding/bitbybitcoding.github.io/main/.github/assets/tote_board.png',
    website: 'https://www.toteboard.gov.sg',
    color: 'from-bit-lavender to-bit-turquoise',
  },
];

export function PartnersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow py-16 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/70 border border-bit-lavender/30 mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-bit-lavender animate-pulse"></span>
              <span className="text-xs font-bold text-bit-lavender uppercase tracking-wider">
                Building Together
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 text-bit-dark tracking-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-bit-lavender to-bit-red">Partners</span>
            </h1>
            <p className="text-lg md:text-xl text-bit-dark/70 max-w-3xl mx-auto leading-relaxed">
              We\'re grateful to work with organizations that share our vision of making coding education accessible to every Singaporean youth.
            </p>
          </div>

          {/* Main Partner */}
          <div className="mb-16">
            <h2 className="text-3xl font-display font-bold mb-8 text-bit-dark text-center">
              Main Partner
            </h2>
            <div className="glass rounded-3xl overflow-hidden border border-white/60 shadow-xl shadow-bit-lavender/10">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Logo Side */}
                <div className={`relative p-12 bg-gradient-to-br ${mainPartner.color} flex items-center justify-center min-h-[300px]`}>
                  <div className="absolute inset-0 opacity-10">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                  </div>
                  <div className="relative bg-white rounded-2xl p-8 shadow-2xl max-w-xs w-full">
                    <img 
                      src={mainPartner.logo} 
                      alt={`${mainPartner.name} logo`}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </div>

                {/* Content Side */}
                <div className="p-8 md:p-12">
                  <h3 className="text-2xl md:text-3xl font-display font-bold mb-4 text-bit-dark">
                    {mainPartner.name}
                  </h3>
                  <p className="text-bit-dark/70 leading-relaxed mb-6">
                    {mainPartner.description}
                  </p>
                  <a
                    href={mainPartner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-bit-lavender text-white font-bold rounded-xl hover:bg-violet-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                  >
                    Visit Website
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Supporting Partners */}
          <div>
            <h2 className="text-3xl font-display font-bold mb-8 text-bit-dark text-center">
              Supporting through BAGUS
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {supportingPartners.map((partner, index) => (
                <div 
                  key={index}
                  className="glass rounded-2xl overflow-hidden border border-white/60 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col"
                >
                  {/* Logo Section */}
                  <div className={`relative p-8 bg-gradient-to-br ${partner.color} flex items-center justify-center min-h-[180px]`}>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full blur-2xl"></div>
                    </div>
                    <div className="relative bg-white rounded-xl p-6 shadow-lg w-full">
                      <img 
                        src={partner.logo} 
                        alt={`${partner.name} logo`}
                        className="w-full h-20 object-contain"
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 bg-white/40 flex flex-col flex-grow">
                    <h3 className="text-xl font-display font-bold mb-3 text-bit-dark">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-bit-dark/70 leading-relaxed mb-4 flex-grow">
                      {partner.description}
                    </p>
                    <a
                      href={partner.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-bit-lavender hover:text-violet-600 font-bold text-sm transition-colors"
                    >
                      Learn More
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="glass inline-block rounded-2xl p-8 border border-bit-lavender/30 shadow-lg bg-white/40 backdrop-blur-md">
              <h3 className="text-2xl font-display font-bold mb-3 text-bit-dark">
                Interested in Partnering?
              </h3>
              <p className="text-bit-dark/70 mb-6 max-w-lg">
                We\'re always looking for organizations that share our mission to empower young coders.
              </p>
              <a
                href="/#/contact"
                className="inline-flex items-center gap-2 px-8 py-3 bg-bit-red text-white font-bold rounded-xl hover:bg-red-600 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 text-center text-bit-dark/50 text-sm relative z-10">
        <p>&copy; {new Date().getFullYear()} Bit by Bit Coding.</p>
        <p>Democratising coding education, bit by bit.</p>
      </footer>
    </div>
  );
}
