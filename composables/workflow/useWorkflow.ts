import { workflowApiFactory } from "@/apiFactory/workflow";
import { useLogin } from '@/composables/auth/login'
export const useCreateWorkflow = () => {
  const workflowForm = ref({
    orgId: "" as any,
    name: "",
    description: "",
  }) as any;
  const creating = ref(false);
  const { id } = useLogin()
  const createFlow = async () => {
    const payload = {
      orgId: id.value,
      name: workflowForm.value.name,
      description: workflowForm.value.description,
    };
    creating.value = true;
    try {
      const result = await workflowApiFactory.createWorkflow(payload);
      useNuxtApp().$toast.success("Workflow was created successfully", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
      workflowForm.value.name = ''
      workflowForm.value.description = ''
    } catch (error) {
      useNuxtApp().$toast.error("Something went wrong while saving workflow", {
        autoClose: 5000,
        dangerouslyHTMLString: true,
      });
    } finally {
      creating.value = false;
    }
  };

  const isFormEmpty = computed(() => {
    return !!(workflowForm.value.name && workflowForm.value.description)
  })

  return { createFlow, creating, isFormEmpty, workflowForm };
};
