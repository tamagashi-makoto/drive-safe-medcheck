import { Camera, ScanBarcode, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        {/* Header */}
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-foreground">
            DriveSafe Med Check
          </h1>
          <p className="text-lg text-muted-foreground">
            Check your medicine before you drive
          </p>
        </div>

        {/* Main Actions */}
        <div className="space-y-4">
          <Button
            onClick={() => navigate("/result?type=scan")}
            className="w-full h-32 text-xl flex flex-col gap-3 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <Camera className="w-12 h-12" />
            <span>Scan Prescription</span>
          </Button>

          <Button
            onClick={() => navigate("/result?type=barcode")}
            className="w-full h-32 text-xl flex flex-col gap-3 rounded-2xl shadow-lg hover:shadow-xl transition-all"
            size="lg"
          >
            <ScanBarcode className="w-12 h-12" />
            <span>Scan Barcode</span>
          </Button>
        </div>

        {/* Help Button */}
        <div className="pt-4">
          <Button
            onClick={() => navigate("/help")}
            variant="outline"
            className="w-full flex items-center justify-center gap-2 rounded-2xl"
            size="lg"
          >
            <HelpCircle className="w-5 h-5" />
            <span>How to use this app</span>
          </Button>
        </div>

        {/* Footer */}
        <div className="text-center pt-4">
          <p className="text-sm text-muted-foreground">
            Powered by Gemma 3 (on-device AI)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
