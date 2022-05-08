import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

describe('Submit feedback', () => {
    it('should be able to sumbit feedback', async () => {
        const submitFedback = new SubmitFeedbackUseCase(
            {create: async() => {}},
            {sendMail: async() => {}}
        )

        await expect(submitFedback.execute({
            type: "BUG",
            comment: "Example comment for bug feedback"
        })).resolves.not.toThrow();
    })
})