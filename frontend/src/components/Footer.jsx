export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container py-6 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} RideOn. All rights reserved.</p>
        <p className="text-gray-500">anchula yashwanth</p>
      </div>
    </footer>
  );
}
