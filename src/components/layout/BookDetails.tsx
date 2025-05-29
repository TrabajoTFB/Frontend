import React from "react";
import { ChevronRight } from "lucide-react";

const BookDetails: React.FC = () => {
    return (
        <div className="max-w-3xl mx-auto px-4 py-8 text-gray-900">
            <h2 className="text-2xl font-semibold mb-2">Details</h2>
            <p className="text-gray-500 mb-6">
                In a world cluttered with noise and complexity, Armory Ramsey delivers a manifesto for intentional living. 'Simple Way of Piece Life' is not just a minimalist guide but an invitation to reclaim what truly matters. Blending personal anecdotes, practical exercises, and profound insights, the book dismantles modern productivity myths and redefines simplicity. Perfect for readers seeking to declutter their spaces, minds, and schedules.
            </p>
            <div className="divide-y divide-gray-200 text-sm">
                <div className="flex justify-between py-3">
                    <span className="font-medium">ISBN-13</span>
                    <span className="text-right">978-3-16-148410-0</span>
                </div>
                <div className="flex justify-between py-3">
                    <span className="font-medium">Dimensions</span>
                    <span className="text-right">6" x 9" (15.2 × 22.9 cm)</span>
                </div>
                <div className="flex justify-between py-3">
                    <span className="font-medium">Pages</span>
                    <span className="text-right">320 (includes illustrations)</span>
                </div>
                <div className="flex justify-between py-3">
                    <span className="font-medium">Publisher</span>
                    <span className="text-right">Harmony Press</span>
                </div>
                <div className="flex justify-between py-3">
                    <span className="font-medium">Weight</span>
                    <span className="text-right">1 lb (450 g)</span>
                </div>
                <div className="flex justify-between py-3">
                    <span className="font-medium">Language</span>
                    <span className="text-right">English (Spanish available)</span>
                </div>
            </div>    
            <div className="mt-6 flex justify-center">
                <button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-full flex items-center gap-2">
                    View more <ChevronRight size={20} />
                </button>
            </div>
        </div>
    );
};

export default BookDetails;