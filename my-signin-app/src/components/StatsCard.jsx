export default function StatsCard() {
  return (
    <div className="relative">
      {/* Main Stats Card */}
      <div className="bg-white rounded-3xl shadow-lg py-6 px-4">
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <img src="/placeholder.svg" alt="CodeAnt AI" className="h-6 w-6" />
            <span className="text-sm font-medium">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
        </div>
        <div className="flex justify-between gap-24">
          <div className="text-center">
            <div className="font-semibold text-xl">30+</div>
            <span className="text-xs text-gray-600">Language Support</span>
          </div>
          <div className="text-center">
            <div className="font-semibold text-xl">10K+</div>
            <div className="text-xs text-gray-600">Developers</div>
          </div>
          <div className="text-center">
            <div className="font-semibold text-xl">100K+</div>
            <div className="text-xs text-gray-600">Hours Saved</div>
          </div>
        </div>
      </div>

      {/* Floating Stats Card */}
      <div className="absolute -bottom-20 right-4 bg-white rounded-xl shadow-lg p-4 w-48">
        <div className="flex items-start gap-4">
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
            <div
              className="w-6 h-6 bg-blue-500 rounded-full opacity-75"
              style={{ clipPath: "polygon(0 0, 75% 0, 75% 75%, 0 75%)" }}
            />
          </div>
          <div>
            <div className="text-sm text-gray-600">Issues Fixed</div>
            <div className="font-semibold text-xl">500K+</div>
            <div className="flex items-center text-xs mt-1">
              <span className="text-green-500">↑ 14%</span>
              <span className="text-gray-500 ml-1">This week</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
