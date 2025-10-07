import { Home, Camera, ScanBarcode, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";

const Help = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background p-4 py-8">
      <div className="w-full max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-bold text-foreground">How It Works</h1>
          <p className="text-muted-foreground">
            Learn how to use DriveSafe Med Check
          </p>
        </div>

        {/* Instructions */}
        <div className="space-y-4">
          <Card className="p-6 rounded-2xl">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Camera className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">
                  Scan Prescription
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Take a clear photo of your prescription. The app will analyze
                  the medication information and check if it's safe to drive.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <ScanBarcode className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">
                  Scan Barcode
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Scan the barcode on your medication package. The app will
                  retrieve the drug information and provide driving safety
                  guidance.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 rounded-2xl">
            <div className="flex gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h3 className="font-semibold text-lg text-foreground">
                  Review Results
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  The app will show you if the medication is safe for driving or
                  if it may impair your ability to drive safely.
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Important Info */}
        <Card className="p-6 rounded-2xl bg-muted">
          <div className="space-y-3">
            <h3 className="font-semibold text-foreground">Important Notes</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  This app uses on-device AI (Gemma 3) for privacy and speed.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  Always consult your doctor or pharmacist for personalized
                  medical advice.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-primary">•</span>
                <span>
                  If you feel drowsy or impaired, do not drive regardless of the
                  app's result.
                </span>
              </li>
            </ul>
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
        <div className="pt-4 border-t border-border">
          <p className="text-xs text-muted-foreground text-center leading-relaxed">
            <strong>Disclaimer:</strong> This app does not replace medical
            advice. Always consult your healthcare provider before making
            decisions about medication and driving.
          </p>
          <p className="text-xs text-muted-foreground text-center mt-2">
            For questions or support, contact your healthcare provider.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
