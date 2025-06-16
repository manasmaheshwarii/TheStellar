import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Mail } from "lucide-react";

const ComplaintSection = () => {
  const handleComplaintClick = () => {
    const emailAddress = "ravi.k@thestellar.in";
    const subject = "Customer Complaint - The Stellar";
    const body =
      "Dear The Stellar Team,\n\nI would like to raise a complaint regarding:\n\n[Please describe your issue here]\n\nThank you for your attention to this matter.\n\nBest regards,";

    const mailtoLink = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    
    // Open the email client
    window.location.href = mailtoLink;
  };

  return (
    <section className="py-16 bg-stellar-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-stellar-600 mr-2" />
            <h2 className="text-3xl font-bold text-stellar-800">
              Log a Complaint?
            </h2>
          </div>
          <p className="text-stellar-600 text-lg max-w-2xl mx-auto">
            We value your feedback and take all complaints seriously. Contact us
            directly to resolve any issues.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <Card className="bg-white border-stellar-200 shadow-lg">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-stellar-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-stellar-600" />
              </div>
              <h3 className="text-xl font-semibold text-stellar-800 mb-2">
                Submit Your Complaint
              </h3>
              <p className="text-stellar-600 mb-6">
                Click below to send us your complaint via email. We'll respond
                promptly to address your concerns.
              </p>
              <Button
                onClick={handleComplaintClick}
                className="w-full bg-stellar-600 hover:bg-stellar-700 text-white py-3 px-6"
                size="lg"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Complaint Email
              </Button>
              <p className="text-sm text-stellar-500 mt-3">
                Email: ravi.k@thestellar.in
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ComplaintSection;