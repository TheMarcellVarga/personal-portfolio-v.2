import RecoveryPage from "./components/RecoveryPage";

export default function NotFound() {
  return (
    <RecoveryPage
      eyebrow="404 / Page not found"
      title="This path led nowhere."
      description="The page may have moved, or the link may have been typed differently. The portfolio is still here, with the work, process, and contact paths one step away."
    />
  );
}
