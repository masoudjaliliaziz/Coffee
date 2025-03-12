"use client";

import { useEffect, useState } from "react";
import { supabase } from "../_lib/supabase";

export function useUser() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching session:", error.message);
      } else {
        setUser(data.session?.user || null);
      }
      setLoading(false);
    };

    getUser();

    // لیسنر برای تغییرات در وضعیت احراز هویت
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (_, session) => {
        setUser(session?.user || null);
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  return { user, loading };
}
