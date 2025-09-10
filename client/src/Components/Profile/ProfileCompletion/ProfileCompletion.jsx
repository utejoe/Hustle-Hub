import React, { useContext, useMemo } from "react";
import "./ProfileCompletion.css";
import { AuthContext } from "../../../Context/AuthContext";

const ProfileCompletion = () => {
  const { user } = useContext(AuthContext);

  // ✅ Required fields for profile completion
  const requiredFields = ["firstName", "lastName", "email", "username", "phone", " school", "avatarUrl"];

  // ✅ Calculate completion percentage
  const { completion, filledFields } = useMemo(() => {
    if (!user) return { completion: 0, filledFields: [] };

    const filled = requiredFields.filter((field) => {
      const value = user[field];
      return value && value.trim() !== "";
    });

    return {
      completion: Math.round((filled.length / requiredFields.length) * 100),
      filledFields: filled
    };
  }, [user]);

  return (
    <section className="profile-completion" title="Click to complete your profile">
      <h2>Profile Completion</h2>
      <div className="completion-bar">
        <div
          className="completion-fill"
          style={{ width: `${completion}%` }}
          aria-label={`${completion}% complete`}
        />
      </div>
      <p>
        {completion === 100
          ? "Your profile is fully complete – enjoy all the features!"
          : `You're ${completion}% complete – complete your profile to unlock more features!`}
      </p>
    </section>
  );
};

export default ProfileCompletion;
