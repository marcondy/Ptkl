import Navbar from './components/Navbar'
import Footer from './components/Footer'
import PageContainer from './components/ui/PageContainer'

export default function PrivacyApp() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-black text-white antialiased">
      <Navbar />
      <main className="w-full min-w-0 overflow-x-hidden pt-32 pb-24">
        <PageContainer>
          <div className="mx-auto max-w-3xl">
            <h1 className="font-heading text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 font-mono text-sm tracking-wide text-[#00E5FF]">
              LAST UPDATED: JULY 2026
            </p>

            <div className="prose prose-invert mt-12 max-w-none space-y-8 text-zinc-400">
              <section>
                <h2 className="text-xl font-semibold text-white">1. Sovereign Data Guarantee</h2>
                <p>
                  Hyperia is built on the philosophy of sovereign data. <strong>We do not collect, store, or transmit your personal data, logs, or protocols to any cloud servers.</strong> All your data stays exactly where it belongs: encrypted on your physical device.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">2. No Accounts, No Tracking</h2>
                <p>
                  You do not need to create an account to use Hyperia. There is no email registration, no phone number verification, and absolutely zero third-party analytics trackers (no Google Analytics, no Facebook Pixel, no telemetry). You are anonymous by default.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">3. Network Access</h2>
                <p>
                  The app requires network access strictly for two optional features:
                </p>
                <ul className="mt-4 list-inside list-disc space-y-2">
                  <li><strong>Hyperia Pro Verification:</strong> Validating your purchase via Google Play Billing.</li>
                  <li><strong>Community Sync:</strong> Fetching community catalogs when you explicitly provide a CSV URL.</li>
                </ul>
                <p className="mt-4">
                  We never transmit your personal protocols over the network.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">4. Backups and Portability</h2>
                <p>
                  If you choose to use the Backup & Restore feature, your data is exported locally as a standard CSV or JSON file to your device's internal storage. We have no access to these files. It is your responsibility to secure these exports if you transfer them off-device.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-white">5. Changes to this Policy</h2>
                <p>
                  Because we don't collect data, this policy is unlikely to change significantly. If we ever add features that require network transmission (which goes against our core philosophy), we will update this policy and require your explicit, opt-in consent within the app.
                </p>
              </section>
            </div>
          </div>
        </PageContainer>
      </main>
      <Footer />
    </div>
  )
}
