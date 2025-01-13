"use client"
import { useState } from 'react';

const useSoloPlugins = (baseId, reavlidate) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const deletePlugin = async () => {
        setIsLoading(true);
        setError(null);
        try {
            await (window as any).electron.invoke('delete-template', baseId);
            await reavlidate()
        } catch (err) {
            setError(`Error deleting plugin: ${err.message}`);
        } finally {
            setIsLoading(false);
        }
    };

    return {
        deletePlugin,
        isLoading,
        error,
    };
}

export default useSoloPlugins