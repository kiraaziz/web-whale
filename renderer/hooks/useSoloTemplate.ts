"use client"
import { useState } from 'react';
import { toast } from 'sonner';

const useSoloTemplates = (baseId, reavlidate) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deleteTemplate = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await (window as any).electron.invoke('delete-template', baseId);
            await reavlidate()
        } catch (err) {
            setError(`Error deleting Template: ${err.message}`);
            toast.error(`Error deleting Template: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        deleteTemplate,
        isLoading,
        error,
    };
}

export default useSoloTemplates