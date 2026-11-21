import { Star, MessageSquareText, ArrowUpRight } from 'lucide-react'

const GOOGLE_REVIEW_URL =
  'https://g.page/r/Cf7xSQ81uY_iEBI/review'

export default function GoogleReview() {
  return (
    <section className="bg-slate-50 py-16">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-blue-950 px-6 py-12 text-center shadow-xl sm:px-12">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white">
            <MessageSquareText className="h-8 w-8 text-blue-900" />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-red-400">
            Your Feedback Matters
          </p>

          <h2 className="mt-3 text-3xl font-extrabold text-white sm:text-4xl">
            Happy with our service?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-7 text-blue-100">
            Your feedback helps S.D. COMPUTER grow and serve our customers
            better. If you've shopped with us or used our services,
            please share your genuine experience on Google.
          </p>

          <div className="mt-6 flex justify-center gap-1 text-yellow-400">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} size={25} fill="currentColor" />
            ))}
          </div>

          <a
            href={GOOGLE_REVIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-red-600 px-7 py-4 font-bold text-white shadow-lg transition hover:-translate-y-1 hover:bg-red-700"
          >
            Rate Us on Google
            <ArrowUpRight size={19} />
          </a>

          <p className="mt-5 text-sm text-blue-200">
            Thank you for supporting our business!
          </p>
        </div>
      </div>
    </section>
  )
}