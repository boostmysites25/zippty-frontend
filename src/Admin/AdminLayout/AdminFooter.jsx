import React from "react";
import { Link } from "react-router-dom";

const AdminFooter = () => {
  return (
    <div>
      {" "}
      {/* Footer */}
      <footer className="mt-auto py-4 border-t border-gray-200">
        <div className="flex justify-end space-x-4 text-sm text-gray-500">
          <Link to="#" className="hover:text-gray-700">
            About
          </Link>
          <Link to="#" className="hover:text-gray-700">
            Careers
          </Link>
          <Link to="#" className="hover:text-gray-700">
            Policy
          </Link>
          <Link to="#" className="hover:text-gray-700">
            Contact
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default AdminFooter;
