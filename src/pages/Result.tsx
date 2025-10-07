import { AlertCircle, CheckCircle, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Result = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type");
  
  // Demo: alternating between safe and prohibited based on type
  const isProhibited = type === "scan";

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Result Card */}
        <Card className="p-8 space-y-6 rounded-3xl shadow-xl">
          {/* Visual Indicator */}
          <div className="flex flex-col items-center justify-center space-y-4">
            {isProhibited ? (
              <>
                <div className="w-24 h-24 rounded-full bg-destructive/10 flex items-center justify-center">
                  <AlertCircle className="w-16 h-16 text-destructive" />
                </div>
                <h2 className="text-2xl font-bold text-destructive text-center">
                  Driving Prohibited
                </h2>
              </>
            ) : (
              <>
                <div className="w-24 h-24 rounded-full bg-success/10 flex items-center justify-center">
                  <CheckCircle className="w-16 h-16 text-success" />
                </div>
                <h2 className="text-2xl font-bold text-success text-center">
                  Safe to Drive
                </h2>
              </>
            )}
          </div>

          {/* Explanation */}
          <div className="space-y-3 pt-2">
            <p className="text-base text-foreground leading-relaxed text-center">
              {isProhibited
                ? "This medicine may cause drowsiness, dizziness, or impaired judgment. It is not recommended to drive or operate heavy machinery while taking this medication."
                : "Based on the information available, this medication does not have significant warnings against driving. However, always monitor how you feel and consult your doctor if you experience any side effects."}
            </p>
          </div>

          {/* AI Attribution */}
          <div className="pt-2 border-t border-border">
            <p className="text-xs text-muted-foreground text-center">
              Analysis powered by Gemma 3 (on-device AI)
            </p>
          </div>
        </Card>

        {/* Back Button */}
        <Button
          onClick={() => navigate("/")}
          className="w-full h-14 text-lg flex items-center justify-center gap-2 rounded-2xl shadow-lg"
          size="lg"
        >
          <Home className="w-5 h-5" />
          <span>Back to Home</span>
        </Button>

        {/* Disclaimer */}
        <p className="text-xs text-muted-foreground text-center px-4">
          This app does not replace medical advice. Always consult your healthcare provider.
        </p>
      </div>
    </div>
  );
};

export default Result;
