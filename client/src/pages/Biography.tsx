import profileImage from "@assets/generated_images/Artist_profile_portrait_ad00c8be.png";

export default function Biography() {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        <h1
          className="font-serif text-5xl md:text-6xl font-light mb-16 text-center"
          data-testid="text-page-title"
        >
          Biography
        </h1>

        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="md:col-span-1">
            <img
              src={profileImage}
              alt="Albi Yzo"
              className="w-full rounded-md"
              data-testid="img-profile"
            />
          </div>
          <div className="md:col-span-2 space-y-6">
            <div>
              <h2 className="font-serif text-2xl mb-4">Albi Yzo</h2>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-bio-basic">
                Born in Korçë, Albania, 1993
                <br />
                Lives and works in Tirana
                <br />
                Visual Artist
              </p>
            </div>

            <div>
              <h3 className="font-serif text-xl mb-3">Education</h3>
              <div className="space-y-2 text-muted-foreground" data-testid="text-education">
                <p>
                  <strong className="text-foreground">2022:</strong> MA (Master
                  of Arts), University of Arts, Tirana, Albania
                </p>
                <p>
                  <strong className="text-foreground">2015:</strong> Licence 1,
                  University of Lorraine – Faculty of Plastic Arts, Metz, France
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-muted/30 rounded-md p-12 md:p-16">
          <h2 className="font-serif text-3xl mb-8 text-center">
            Artist Statement
          </h2>
          <div className="space-y-6 font-sans text-lg leading-relaxed text-muted-foreground" data-testid="text-statement">
            <p>
              To create in our contemporary era, according to my opinion it means
              to be committed in selecting different forms of expressing but
              always preserving the essence of oneself, so that his energy is
              distributed at the right time and space.
            </p>
            <p>
              Art to me is the ability to produce artworks, that society will put
              in the service of its aesthetic and cultural improvement.
            </p>
            <p>
              In my creations is clearly seen my interest in beauty, my
              ontological search for the innovation, the undeniable heterogeneity
              and the love for the sublime.
            </p>
            <p>
              Balance and harmony between them constitutes what may be the
              artistic character of my work.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
